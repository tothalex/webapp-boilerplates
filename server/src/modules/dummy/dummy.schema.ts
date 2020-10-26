import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Dummy extends Document {
  @Prop()
  name: string
}

export const DummySchema = SchemaFactory.createForClass(Dummy)
