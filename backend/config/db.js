import mongoose  from "mongoose";

const connectDb = async () => {
    const conn = await mongoose.connect(
      
        "mongodb+srv://difads123:todoBackend@cluster0.7bz1ujd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDb Connected : ${conn.connection.host}`);
};

export default connectDb