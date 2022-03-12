import mongoose from 'mongoose';

const Connection = async () => {
   
    const URL = `mongodb+srv://crud:crud@crud.zt2z6.mongodb.net/crud?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;