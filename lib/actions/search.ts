'use server';

import {redirect} from "next/navigation";

export async function search(formData: FormData) {
  const persona = formData.get('persona') ?? 'anonymous';
  const search = formData.get('search') ?? '';

  console.log('searched:', persona, search);

  redirect('/results');
}