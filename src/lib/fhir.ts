export interface Patient { resourceType: 'Patient'; id: string; name: { given: string[]; family: string }[]; birthDate: string; telecom: { system: string; value: string }[]; }
export interface Observation { resourceType: 'Observation'; code: { coding: { code: string; display: string }[] }; valueQuantity?: { value: number; unit: string }; }
export function createPatientResource(data: any): Patient { return { resourceType: 'Patient', id: data.id, name: [{ given: [data.firstName], family: data.lastName }], birthDate: data.dob, telecom: [{ system: 'email', value: data.email }] }; }
export function parseFHIRBundle(bundle: any): any[] { return bundle.entry?.map((e: any) => e.resource) || []; }
