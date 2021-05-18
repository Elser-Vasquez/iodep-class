import { mergeSchemas } from 'graphql-tools';

//we all import schematic modules and resolvers

import sch_user from './schema/sch_user.gql';
import res_user  from './resolvers/res_user';


export const schema_apiVue = mergeSchemas({
    schemas: [
        sch_user
    ],
    resolvers: [
        res_user
    ]
});