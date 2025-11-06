import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

// Mock function to simulate fetching a single survey by ID
async function getSurveyById(id: string) {
  // In a real application, this would fetch data from a database or API.
  // For this example, we'll return a placeholder.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: id,
        title: `Survey ${id}` // Placeholder title
      });
    }, 100);
  });
}

// Dynamic metadata function to set the page title
export async function generateMetadata({ params }) {
  const survey = await getSurveyById(params.id);
  return {
    title: survey.title
  };
}

// Server Action to handle form submission
async function handleSubmitResponse(formData: FormData) {
  const surveyId = formData.get('surveyId') as string;
  const name = formData.get('name') as string | null;
  const response = formData.get('response') as string;

  // Log the received data (for demonstration purposes)
  console.log('Survey ID:', surveyId);
  console.log('Name:', name);
  console.log('Response:', response);

  // Revalidate the cache for the survey details page to show updated data if needed
  revalidatePath(`/survey-details/${surveyId}`);

  // Redirect to the same page after submission (or a success page)
  redirect(`/survey-details/${surveyId}`);
}

// The main page component
export default async function SurveyDetailsPage({ params }): Promise<JSX.Element> {
  const survey = await getSurveyById(params.id);

  return (
    <div>
      <h1>{survey.title}</h1>
      <form action={handleSubmitResponse}>
        {/* Hidden input to pass the survey ID to the Server Action */}
        <input type="hidden" name="surveyId" value={survey.id} />

        <div>
          <label htmlFor="name">Your Name (Optional):</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="response">Your Answer:</label>
          <textarea id="response" name="response" required></textarea>
        </div>

        <button type="submit">Submit Response</button>
      </form>
    </div>
  );
}
