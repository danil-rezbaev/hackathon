import { Job } from "../store/slices/jobsSlice";

export const checkCompletion = (jobs: Job[]) => {
    let result = true;
    jobs.forEach((job) => {
        if (job.maxQuantity !== job.currentQuantity) {
            result = false;
        }
    })
    return result;
} 