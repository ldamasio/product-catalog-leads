import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';

const LOG_DIR = path.join(__dirname, '../logs');

export function generateLog(message: string): void {
  const today = format(new Date(), 'yyyy-MM-dd');
  const logFilePath = path.join(LOG_DIR, `${today}.log`);

  // Check if log file for today exists
  if (fs.existsSync(logFilePath)) {
    // Append log message to existing file
    fs.appendFileSync(logFilePath, `${Date.now()}:${message}\n`);
  } else {
    // Create new log file for today and write message
    fs.mkdirSync(LOG_DIR, { recursive: true });
    fs.writeFileSync(logFilePath, `${Date.now()}:${message}\n`);
  }
}

export default generateLog; 