import User from '../../models/user.model';

export default ({
    Query: {
        user: async (_, { email }) => {
            const user = await User.findOne({ email: email });
            return user;
        }


    },

    Mutation: {
        createUser: async (_, { input }) => {
            const new_user = new User(input);
            await new_user.save();
            return new_user;
        },


        updateUser: async (_, { id, input }) => {
            const update_user = await User.findByIdAndUpdate( id, input );
            return update_user;
        },


        deleteUser: async (root, { id, input }) => {
            const delete_user = await User.findById(id);
            
            if (input.email === delete_user.email) {
                if(input.password === delete_user.password) {
                    console.log("eliminando el usuario");
                    return await User.findByIdAndRemove(id);
                }
            } else {
                console.log("usuario no autizado para esta accion");
                return null;
            }

            return delete_user;
        }

    }
});