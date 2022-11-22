import { creatServer } from "Http";

creatServer((req,resp)=>{
    resp.write("hello");
    resp.end();
}).listen(4500);