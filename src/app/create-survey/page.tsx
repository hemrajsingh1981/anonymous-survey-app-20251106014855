import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

async function handleCreateSurvey(formData: FormData) {
  const title = formData.get('title') as string;
  console.log('Survey Title:', title);
  revalidatePath('/view-surveys');
  redirect('/view-surveys');
}

export default function CreateSurveyPage(): JSX.Element {
  return (
    <div>
      <h1>Create New Survey</h1>
      <form action={handleCreateSurvey}>
        <div>
          <label htmlFor="title">Survey Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <button type="submit">Create Survey</button>
      </form>
    </div>
  );
}
