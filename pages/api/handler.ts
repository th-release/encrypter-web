// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CryptoJS from 'crypto-js'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type, text } = JSON.parse(req.body)
  if (type === "SHA256") {
    return res.status(200).json({ status: true, text: CryptoJS.SHA256(text).toString() })
  }
  else if (type === "SHA512") {
    return res.status(200).json({ status: true, text: CryptoJS.SHA512(text).toString() })
  }
  else if (type === "MD5") {
    return res.status(200).json({ status: true, text: CryptoJS.MD5(text).toString() })
  }
  else if (type === "SHA1") {
    return res.status(200).json({ status: true, text: CryptoJS.SHA1(text).toString() })
  }
  else if (type === "SHA224") {
    return res.status(200).json({ status: true, text: CryptoJS.SHA224(text).toString() })
  }
  else if (type === "SHA3") {
    return res.status(200).json({ status: true, text: CryptoJS.SHA3(text).toString() })
  }
  else if (type === "SHA384") {
    return res.status(200).json({ status: true, text: CryptoJS.SHA384(text).toString() })
  }
  else return res.status(200).json({ status: false, text })
}
