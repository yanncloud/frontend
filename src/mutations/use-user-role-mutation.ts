import { gql } from 'graphql-request'
import { mutate, useSWRConfig } from 'swr'

import { useMutationFetch } from './helper/use-mutation-fetch'
import { useAuthentication } from '@/auth/use-authentication'
import { useLoggedInData } from '@/contexts/logged-in-data-context'
import { UserRoleInput } from '@/fetcher/graphql-types/operations'

const addMutation = gql`
  mutation addRole($input: UserRoleInput!) {
    user {
      addRole(input: $input) {
        success
      }
    }
  }
`

const removeMutation = gql`
  mutation removeRole($input: UserRoleInput!) {
    user {
      removeRole(input: $input) {
        success
      }
    }
  }
`

export function useUserAddOrRemoveRoleMutation() {
  const mutationFetch = useMutationFetch()
  const auth = useAuthentication()
  const loggedInData = useLoggedInData()
  const { cache } = useSWRConfig()

  return async function (input: UserRoleInput, isAdd: boolean) {
    const success = await mutationFetch(
      isAdd ? addMutation : removeMutation,
      input
    )

    if (success) {
      if (!loggedInData || !auth.current) return
      resetUserRolesCache(cache)
    }
    return success
  }
}

function resetUserRolesCache(cache: unknown) {
  if (!(cache instanceof Map)) {
    throw new Error(
      'matchMutate requires the cache provider to be a Map instance'
    )
  }
  const keys = []
  for (const key of cache.keys() as IterableIterator<string>) {
    const shouldBeMutated =
      key.startsWith('$inf$') && key.includes('query usersByRole')

    if (shouldBeMutated) {
      keys.push(key)
    }
  }

  keys.forEach((key) => {
    void mutate(key)
  })
}
