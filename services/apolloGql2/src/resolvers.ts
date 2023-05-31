import { LooseObject } from "utilities"

export const resolvers = {
  Query: {
    ciao: async (
      _parent: LooseObject,
      _args: LooseObject,
      _context: LooseObject
    ) => {
      return {
        message: 'Ciao from Apollo Server'
      }
    },
  },
}
