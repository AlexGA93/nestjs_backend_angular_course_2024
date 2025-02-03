import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
// database model (entity)
export class User {

    @Prop({ unique: true, required: true })
    email:      string;

    @Prop({ required: true })
    name:       string;

    @Prop({ minlength: 6, required: true })
    password:   string;

    @Prop({ default: true })
    isActive:   string;

    @Prop({ type: [String], default: ['user'] })
    roles:      string[];
}

// export as schema
export const UserSchema = SchemaFactory.createForClass(User);