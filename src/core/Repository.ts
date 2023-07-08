import { db } from "../db/db";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export abstract class Repository<T extends IEntity> implements IRepository<T> {
  constructor(private readonly table: string) {}

  add(dataObject: IEntityDetails<T>): Promise<T> {
    return this.createPromise(async (resolve) => {
      const columns = this.buildColumnNames(dataObject);
      const placeholder = this.buildColumnPlaceholders(dataObject);
      const values = this.buildColumnValues(dataObject);
      const query = `INSERT INTO ${this.table}(${columns}) VALUES (${placeholder}) RETURNING *`;
      const item = await db.query(query, values);
      resolve(item.rows[0]);
    });
  }

  delete(dataObject: T): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      resolve(this.deleteById(dataObject.id));
    });
  }

  deleteById(id: number): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      const data = await db.query(`DELETE FROM ${this.table} WHERE id = $1`, [
        id,
      ]);
      resolve(data.rowCount === 1);
    });
  }

  findAll(): Promise<T[]> {
    return this.createPromise(async (resolve) => {
      const data = await db.query(`SELECT * FROM ${this.table}`);
      resolve(data.rows);
    });
  }

  findById(id: number): Promise<T | undefined> {
    return this.createPromise(async (resolve) => {
      const data = await db.query(`SELECT * FROM ${this.table} WHERE id = $1`, [
        id,
      ]);
      resolve(data.rows[0]);
    });
  }

  updateById(
    id: number,
    dataObject: IEntityDetails<T>
  ): Promise<T | undefined> {
    return this.createPromise(async (resolve, reject) => {
      const query = `UPDATE ${this.table} SET ${this.buildUpdatePlaceholders(
        dataObject
      )} WHERE id = $1 RETURNING *`;
      const data = await db.query(query, [
        id,
        ...this.buildUpdateValues(dataObject),
      ]);
      resolve(data.rows[0]);
    });
  }

  private createPromise<T>(
    block: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        await block(resolve, reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  private buildUpdatePlaceholders(dataObject: IEntityDetails<T>): string {
    let code = "";
    let count = 1;
    for (const propName in dataObject) {
      count++;
      if (code.length === 0) {
        code = `${propName}=$${count}`;
      } else {
        code += `,${propName}=$${count}`;
      }
    }

    count++;
    code += `,createdAt=$${count}`;
    return code;
  }

  private buildUpdateValues(dataObject: IEntityDetails<T>): any[] {
    const result: any[] = [];
    for (const propName in dataObject) {
      result.push((dataObject as any)[propName]);
    }
    result.push(new Date().toUTCString());
    return result;
  }

  private buildColumnNames(dataObject: IEntityDetails<T>): string {
    let code = "";
    for (const propName in dataObject) {
      if (code.length === 0) {
        code = propName;
      } else {
        code += `,${propName}`;
      }
    }
    return code;
  }

  private buildColumnPlaceholders(dataObject: IEntityDetails<T>) {
    let count = 0;
    let code = "";
    for (const propName in dataObject) {
      count++;
      if (code.length === 0) {
        code = `$${count}`;
      } else {
        code = `,$${count}`;
      }
    }
    return code;
  }

  private buildColumnValues(dataObject: IEntityDetails<T>): T[keyof T][] {
    const result: T[keyof T][] = [];
    for (const propName in dataObject) {
      result.push((dataObject as any)[propName]);
    }
    return result;
  }
}
