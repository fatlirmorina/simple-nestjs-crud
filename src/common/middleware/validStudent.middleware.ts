import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { students } from "../../db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const studentId = req.headers.student;
        const studentExists = students.some(student => { 
            return student.id === studentId;
        });
        next();
        
        //studentExists ? next() : res.end(JSON.stringify({error: 'No student id provided in the authorization headers'}));
        //  CHECK       PASSED                                  DID NOT PASS!
    }
}