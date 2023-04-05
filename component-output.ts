import { Output as PulumiOutput } from '@pulumi/pulumi';
import { z } from 'zod';

export const schema = z.object({
})

type SchemaType = z.infer<typeof schema>;

type Output = {
    [key in keyof SchemaType]: PulumiOutput<SchemaType[key]> | SchemaType[key];
}

export default Output;