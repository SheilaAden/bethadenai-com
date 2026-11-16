import { notFound } from 'next/navigation'
import { ArticleDetail, articleMetadata } from '@/components/global/ArticleDetail'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'

type PageProps = { params: Promise<{ slug: string }> }

function articleUrl(slug: string) {
  return `https://www.bethadenai.com/resources/${slug}`
}

export function generateStaticParams() {
  return getAllArticles().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  return article ? articleMetadata(article, articleUrl(article.slug)) : {}
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return <ArticleDetail article={article} url={articleUrl(article.slug)} parent={{ label: 'Selected Work', href: '/work' }} />
}
