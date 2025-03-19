import { MoocBackendApp } from "./MoocBackendApp";

try{
  new MoocBackendApp().start();
}catch(err){
  console.error(err);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});