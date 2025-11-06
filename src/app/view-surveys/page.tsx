import Link from 'next/link';

// Mock function to simulate fetching surveys
async function getSurveys(): Promise<Array<{ id: string; title: string }>> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return [
    {
      id: '1',
      title: 'Customer Satisfaction Survey'
    },
    {
      id: '2',
      title: 'Employee Feedback Survey'
    }
  ];
}

export default async function ViewSurveysPage(): Promise<JSX.Element> {
  const surveys = await getSurveys();

  return (
    <div>
      <h1>View Surveys</h1>
      <ul>
        {surveys.map(survey => (
          <li key={survey.id}>
            <Link href={`/survey-details/${survey.id}`}>
              {survey.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
