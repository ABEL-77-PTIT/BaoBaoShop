import { LoaderFunctionArgs, json, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import transformPageTitle from '~/helper/transformPageTitle'
import HomePage from '~/pages/Homepage'

export const meta: MetaFunction = ({ data }: { data: any }) => {
  return [{ title: transformPageTitle(data?.page?.title) }]
}

export const loader = async ({ params, request, context }: LoaderFunctionArgs) => {
  return json({ page: { title: 'Home page' }, params, request, context })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <div className="">
      <HomePage />
    </div>
  )
}
