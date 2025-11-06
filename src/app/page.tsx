import Link from 'next/link';

export default function HomePage(): JSX.Element {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Anonymous Survey App</h1>
      <p className="mb-6">Welcome to the anonymous survey application. Here you can create new surveys or view existing ones.</p>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/create-survey" className="text-blue-600 hover:underline">
              Create Survey
            </Link>
          </li>
          <li>
            <Link href="/view-surveys" className="text-blue-600 hover:underline">
              View Surveys
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
