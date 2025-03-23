import assert from "assert";

import { AfterAll, BeforeAll, Given, Then } from "@cucumber/cucumber"
import request from "supertest"
import { MoocBackendApp } from "../../../../../../src/apps/mooc/backend/MoocBackendApp";
import { App } from "supertest/types";

let _request:request.Test;
let application: MoocBackendApp;
let _respose: request.Response;


BeforeAll(async ()=>{
  application = new MoocBackendApp();
  await application.start();
})

Given("I send a GET request to {string}",(route:string)=>{
  _request = request(application.httpServer as App).get(route);
})
Then('the response status code should be {int}', async (status:number)=>{
  await _request.expect(status)
})

AfterAll(async () => {
  await application.stop();
});
