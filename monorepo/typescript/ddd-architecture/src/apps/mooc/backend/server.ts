import express, { NextFunction, Request, Response, Router } from "express";
import * as http from "http";
import helmet from "helmet"
import compression from "compression"
import expresHanlder from "errorhandler";
import errorHandler from "errorhandler";
import { registerRoutes } from "./routes";
import httpStatus from "http-status";
import { resolve } from "path";


export class Server {
  private express: express.Express;
  private port: string;
  private httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(express.json());
    this.express.use(helmet());
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: "deny" }));
    this.express.use(compression());

    const router = Router();
    router.use(errorHandler())
    this.express.use(router);

    registerRoutes(router);

    router.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.log("ejecuanossssssssss")
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: "Internal Server Error" });
    })
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(
          `  Mock Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        );
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }
  getExpressServer() {
    return this.express;
  }
  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    });
  }
}