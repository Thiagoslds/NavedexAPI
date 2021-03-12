import express from 'express';
import routes from './shared/infra/http/index'

import './shared/infra/typeorm'

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3334, ()=>{
    console.log('Server started.')
})