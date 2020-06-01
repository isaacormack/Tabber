import request from 'supertest'
import { Connection } from 'typeorm';
import Koa from 'koa'

import * as appModule from "../../src/index";
import * as dbModule from "../../src/database/dbclient";

describe('Integration: Home page', () => {
    let app: Koa
    let db: Connection

    beforeAll((done) => {

        // can wire in testdb if so inclined
        dbModule.initDb((err, conn) => {
            if (err) throw err

            db = conn
            app = appModule.startApp()
            done()
        })

    });

    afterAll((done) => {
        db.close().then(done())
    });
    
    it('should say "Hello World!"', async () => {
        const response: request.Response = await request(app.callback()).get('/')

        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
    it('should give a 404', async () => {
        const response: request.Response = await request(app.callback()).get('/404')
        
        expect(response.status).toBe(404);
        expect(response.text).toBe('Not Found');
    });
});

