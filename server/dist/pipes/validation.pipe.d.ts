import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class ValidationPipe implements PipeTransform<any> {
    transform(value: unknown, { metatype }: ArgumentMetadata): Promise<unknown>;
    private getErrors;
    private toValidate;
}
