const fs=require('fs'),path=require('path');const {ROOT}=require('./foundation.cjs');
const temp=path.join(ROOT,'_qa','browser-temp');fs.mkdirSync(temp,{recursive:true});process.env.TEMP=temp;process.env.TMP=temp;
const {playwright}=require('./DEPENDENCIES.cjs');
module.exports={launch:()=>playwright.chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true,env:{...process.env,TEMP:temp,TMP:temp},args:['--disable-background-networking','--disable-component-update','--no-first-run']}),ROOT};
