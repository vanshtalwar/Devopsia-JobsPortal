// api/jobs.js
import jobs from '../jobs.json';

export default function handler(req, res) {
  res.status(200).json(jobs);
}
