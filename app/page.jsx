"use client";
import { useState, useEffect } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";

export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }


  return (
    <>
      <h1> Welcome To Courses Lab</h1>
      <CourseSearch getSearchResults={(results)=> setCourses(results)}/>
      <Courses courses={courses} />
    </>
  );
}
