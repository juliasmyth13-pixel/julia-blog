export const metadata = {
  title: 'Education and Work Experience',
  description: 'Education and Experience throughout the years.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Education</h1>

      <div className="mb-6">
        <div className="flex justify-between items-baseline">
          <h2 className="font-medium text-xl">
            <a
              href="https://www.villanova.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-neutral-400 underline-offset-4"
            >
              Villanova
            </a>{' '}
            University
          </h2>
          <span className="text-neutral-600 dark:text-neutral-400 tabular-nums">
            2023 — 2027
          </span>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2">
          Pursuing a degree in Economics with minors in Computer Science and Communications.
        </p>
      </div>

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Professional Experience
      </h1>
      <div className="mb-6">
        <div className="flex justify-between items-baseline">
          <h2 className="font-medium text-xl">
            <a
              href="https://www.vanguardjobs.com/students/?source=Google_Jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-neutral-400 underline-offset-4"
            >
              Vanguard
            </a>
          </h2>
          <span className="text-neutral-600 dark:text-neutral-400 tabular-nums">
            June 2025 — August 2025
          </span>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2">
          During the Summer of 2025, I worked as a Capital Project Management Intern
          in the Real Estate department of Vanguard. I gained valuable experience in
          project management, budgeting, and cross-functional collaboration.
        </p>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-baseline">
          <h2 className="font-medium text-xl">
            <a
              href="https://careers.db.com/students-graduates/internship-programme/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-neutral-400 underline-offset-4"
            >
              Deutsche Bank
            </a>
          </h2>
          <span className="text-neutral-600 dark:text-neutral-400 tabular-nums">
            June 2026 — August 2026
          </span>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2">
          This upcoming Summer, I will be working as a fixed income and currencies intern at Deutsche Bank.
          I am excited to gain experience in the finance industry and develop my skills in trading and risk management.
        </p>
      </div>
    </section>
  )
}
