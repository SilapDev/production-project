import { CounterSchema } from "entities/Counter"
import { Userschema } from "entities/User"


export interface StateSchema {
    counter: CounterSchema
    user: Userschema
}