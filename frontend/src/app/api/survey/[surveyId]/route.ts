import { NextApiRequest, NextApiResponse } from 'next';

// Define the handler function with the correct types
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query; // Extract the dynamic 'id' from the query parameters

    // TypeScript ensures `id` is correctly typed. It is of type `string | string[] | undefined`.
    // Assuming you expect `id` to be a string:
    if (typeof id !== 'string') {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    switch (req.method) {
        case 'GET':
            // Handle GET request
            res.status(200).json({ message: `GET request for ID: ${id}` });
            break;
        case 'POST':
            // Handle POST request
            res.status(200).json({ message: `POST request for ID: ${id}` });
            break;
        // Add more cases for PUT, DELETE, etc.
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}