import "./App.css";
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://<vite-project>.supabase.co', '<your-anon-key>')

function App() {
  return <></>;
}

export default App;
