import { boolean, string, z } from "zod";

const scheme = z.object({
    length: string().refine((val) => Number(val) > 0 && Number(val) <= 20),
    uppercase: boolean(),
    lowercase: boolean(),
    numbers: boolean(),
    symbols: boolean()
})

type PasswordSettingsType = z.infer<typeof scheme>

export type { PasswordSettingsType }
export { scheme }