import type { Metadata } from 'next'
import { ArticleCard } from '@/components/global/ArticleCard'
import { Container } from '@/components/global/Container'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Beth Aden writes about launch readiness, operational handoffs, and practical tools teams can use to get work done.',
  alternates: { canonical: '/articles' },
}

export default function ArticlesPage() {
  const articles = getAllArticles('operations-articles')

  return (
    <>
      <section className="bg-graphite py-14 md:py-20">
        <Container>
          <h1 className="font-heading text-4xl font-semibold text-white md:text-5xl">Articles</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-silver">
            What I’ve learned helping teams get launches unstuck, make handoffs clear, and build workflows they can run.
          </p>
        </Container>
      </section>
      <section className="bg-white py-12 md:py-16" aria-label="All articles">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} href={`/articles/${article.slug}`} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
