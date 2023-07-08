import * as fs from 'fs';
import{NextResponse,NextRequest} from "next/server"

export const GET=async()=>{
    try {
        const data = fs.readFileSync('db.json', 'utf8');
        console.log(data);
        return NextResponse.json(JSON.parse(data))
      } catch (err) {
        console.error(err);
      }

    // return fs.readFile("jsconfig.json","utf-8",(err,data)=>{
    //     if(err)
    //     throw err
    //     else{
    //        return data
    //     }
        
    // })

    
}
