import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.id
}
// Function to generate a new 5-digit user ID
export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')

  // increment by 1

  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId

  // lastUserId++; // Increment the last user ID
  // const paddedId = lastUserId.toString().padStart(5, '0'); // Convert to string and pad with leading zeros
  // return paddedId;
}
