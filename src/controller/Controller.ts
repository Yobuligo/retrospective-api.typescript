import { Router } from "express";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export abstract class Controller<T extends IEntity> {
  readonly router = Router();

  constructor(
    private readonly path: string,
    private readonly repository: IRepository<T>
  ) {
    this.add();
    this.deleteById();
    this.findAll();
    this.findById();
    this.updateById();
  }

  private add() {
    this.router.post(`${this.path}`, (req, res) => {
      this.request(res, async () => {
        const body: IEntityDetails<T> = { ...req.body };
        const item = await this.repository.add(body);
        res.status(201).send(item);
      });
    });
  }

  private deleteById() {
    this.router.delete(`${this.path}/:id`, (req, res) => {
      this.request(res, async () => {
        const success = await this.repository.deleteById(req.params.id);
        res.status(200).send(success);
      });
    });
  }

  private findAll() {
    this.router.get(this.path, (req, res) => {
      this.request(res, async () => {
        const items = await this.repository.findAll();
        res.status(200).send(items);
      });
    });
  }

  private findById() {
    this.router.get(`${this.path}/:id`, (req, res) => {
      this.request(res, async () => {
        const item = await this.repository.findById(req.params.id);
        if (item) {
          res.status(200).send(item);
        } else {
          res.status(404).send();
        }
      });
    });
  }

  private updateById() {
    this.router.put(`${this.path}/:id`, (req, res) => {
      this.request(res, async () => {
        const body: IEntityDetails<T> = { ...req.body };
        const item = await this.repository.updateById(req.params.id, body);
        res.status(200).send(item);
      });
    });
  }

  private request(res: any, block: () => void) {
    try {
      block();
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
