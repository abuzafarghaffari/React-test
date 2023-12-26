
import {setupServer } from 'msw/node'
import { handlers } from './handlers'
 
export const server = setupServer(...handlers)

// Start the server
server.listen();
