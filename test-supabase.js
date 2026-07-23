import { createClient } from '@supabase/supabase-js';

const supabase = createClient('http://127.0.0.1:54321', 'sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH');

async function test() {
  const { data, error } = await supabase.from('public_member_directory').select('*');
  console.log(error ? error : data);
}
test();
