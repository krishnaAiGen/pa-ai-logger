import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    
    const tableName = process.env.TABLE_NAME || 'klara_qa_dev';
    
    const result = await client.query(`
      SELECT 
        id,
        timestamp,
        query,
        response,
        status,
        user_id,
        conversation_id,
        response_time_ms,
        created_at,
        updated_at
      FROM ${tableName}
      ORDER BY created_at DESC
    `);
    
    client.release();
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}
