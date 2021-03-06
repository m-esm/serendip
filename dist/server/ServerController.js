"use strict";
/**
 *  @module Server
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const _1 = require(".");
const http_1 = require("../http");
const cluster = require("cluster");
const start_1 = require("../start");
class ServerController {
    constructor(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
        this.clusterTesting = {
            publicAccess: true,
            route: "/api/server/cluster-testing",
            method: "get",
            actions: [
                (req, res, next, done) => {
                    res.write("received in worker " + _1.Server.worker.id);
                    res.end();
                }
            ]
        };
        this.clusterWorkers = {
            publicAccess: true,
            route: "/api/server/cluster-workers",
            method: "get",
            actions: [
                (req, res, next, done) => {
                    res.json({
                        isMaster: cluster.isMaster,
                        isWorker: cluster.isWorker,
                        id: start_1.Worker.id,
                        others: start_1.Worker.others,
                        msg: "answered in worker " + _1.Server.worker.id
                    });
                }
            ]
        };
        this.routes = {
            method: "get",
            publicAccess: true,
            actions: [
                (req, res, next, done) => {
                    setTimeout(() => {
                        next();
                    }, 200);
                },
                (req, res, next, done) => {
                    // var model = _.map(this.httpService.routes, route => {
                    //   route = _.omit(route, "controllerObject");
                    //   return route;
                    // });
                    // res.json(model);
                    done(200);
                }
            ]
        };
        this.throw = {
            method: "get",
            publicAccess: true,
            actions: [
                (req, res, next, done) => {
                    throw new Error("fake error");
                },
                (req, res, next, done) => {
                    // var model = _.map(this.httpService.routes, route => {
                    //   route = _.omit(route, "controllerObject");
                    //   return route;
                    // });
                    // res.json(model);
                    done(200);
                }
            ]
        };
        this.nextError = {
            method: "get",
            publicAccess: true,
            actions: [
                (req, res, next, done) => {
                    next(new http_1.HttpError(500, "just checking"));
                },
                (req, res, next, done) => {
                    done(200);
                }
            ]
        };
        this.doneError = {
            method: "get",
            publicAccess: true,
            actions: [
                (req, res, next, done) => {
                    done("500", "done error");
                },
                (req, res, next, done) => {
                    done(200);
                }
            ]
        };
        this.services = {
            method: "get",
            publicAccess: true,
            actions: [
                (req, res, next, done) => {
                    var model = _.keys(_1.Server.services);
                    res.json(model);
                }
            ]
        };
    }
}
exports.ServerController = ServerController;
