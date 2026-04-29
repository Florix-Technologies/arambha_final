import { collection, getDocs, query, orderBy, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export interface Course {
  id: string;
  title: string;
  category?: string;
  description?: string;
  image?: string;
  createdAt: any;
  uploadStatus: string;
  videoId?: string;
  videoTitle?: string;
  duration?: string;
}

export const getCourses = async (): Promise<Course[]> => {
  try {
    const coursesRef = collection(db, 'courses');
    const q = query(coursesRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Course[];
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const deleteCourse = async (courseId: string) => {
  try {
    await deleteDoc(doc(db, 'courses', courseId));
  } catch (error) {
    console.error('Error deleting course:', error);
    throw error;
  }
};

export const updateCourse = async (courseId: string, data: Partial<Course>) => {
  try {
    await updateDoc(doc(db, 'courses', courseId), data as any);
  } catch (error) {
    console.error('Error updating course:', error);
    throw error;
  }
};

