/* eslint-disable no-console */
'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'

import type { Post } from '../../../../payload/payload-types'

// Fetch the page in a server component, pass it to the client component, then thread it through the hook
// The hook will take over from there and keep the preview in sync with the changes you make
// The `data` property will contain the live data of the document
export const PostsClientPage: React.FC<{
  post: Post
}> = ({ post }) => {
  console.log(post.contact.contactInfos[0].image[0])
  const { data } = useLivePreview<Post>({
    initialData: post,
    serverURL: `http://localhost:3000`,
  })
  console.log(data.contact.contactInfos[0].image[0])

  return <></>
}
