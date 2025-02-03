import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(), // to access to the environment variables
    MongooseModule.forRoot(process.env.MONGO_URI!), // to connect to the database
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
