const express=require("express");
const app=new express();
const {open}= require("sqlite");
const sqlite3= require("sqlite3");
const path=require("path");
let db=null;
const dbpath=path.join(__dirname,"goodreads.db");
const initialize_database_and_server = async() => {
    try 
    {
        db=await open({
            filename:dbpath,
            driver:sqlite3.Database
        });
        app.listen(3000,()=>{
            console.log("server started at port number 3000");
        });
    } 
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}
initialize_database_and_server();