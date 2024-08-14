import { Module } from '@nestjs/common';
import { AttributesValueService } from './attributes-value.service';
import { AttributesValueController } from './attributes-value.controller';

@Module({
  controllers: [AttributesValueController],
  providers: [AttributesValueService]
})
export class AttributesValueModule {}
