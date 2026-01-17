
import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Project } from '../types';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTheme(prev => ({
      ...prev,
      content: { ...prev.content, [name]: value }
    }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTheme(prev => ({
      ...prev,
      colors: { ...prev.colors, [name]: value }
    }));
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editingProject) return;
    const { name, value } = e.target;
    setEditingProject({ ...editingProject, [name]: value });
  };
  
  const handleSaveProject = () => {
    if (!editingProject) return;
    setTheme(prev => ({
        ...prev,
        projects: prev.projects.map(p => p.id === editingProject.id ? editingProject : p)
    }));
    setEditingProject(null);
  };

  const handleAddNewProject = () => {
    const newProject: Project = {
      id: `proj${Date.now()}`,
      category: '새 카테고리',
      title: '새 프로젝트 제목',
      description: '새 프로젝트 설명',
      imageUrl: 'https://picsum.photos/800/600',
      company: '회사명',
      period: 'YYYY.MM - YYYY.MM',
      team: '팀 구성',
      role: '역할',
      tools: '사용 툴',
      platform: '플랫폼',
    };
    setTheme(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
    setEditingProject(newProject);
  };
  
  const handleDeleteProject = (projectId: string) => {
    if (window.confirm('이 프로젝트를 정말 삭제하시겠습니까?')) {
        setTheme(prev => ({
            ...prev,
            projects: prev.projects.filter(p => p.id !== projectId)
        }));
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              포트폴리오 보기
            </Link>
        </div>

        {/* Site Customization */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">사이트 커스터마이징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Colors */}
            <div>
              <h3 className="text-lg font-medium mb-2">색상 설정</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <span className="w-28">배경색</span>
                  <input type="color" name="background" value={theme.colors.background} onChange={handleColorChange} className="ml-2" />
                </label>
                <label className="flex items-center">
                  <span className="w-28">텍스트색</span>
                  <input type="color" name="text" value={theme.colors.text} onChange={handleColorChange} className="ml-2" />
                </label>
              </div>
            </div>
            {/* Text Content */}
            <div>
              <h3 className="text-lg font-medium mb-2">메인 텍스트</h3>
              <div className="space-y-2">
                <label className="block">
                  <span className="font-medium">히어로 부제</span>
                  <textarea name="heroSubtitle" value={theme.content.heroSubtitle} onChange={handleContentChange} className="w-full mt-1 border border-gray-300 p-2 rounded" rows={2} />
                </label>
                 <label className="block">
                  <span className="font-medium">자기소개</span>
                  <textarea name="aboutBio" value={theme.content.aboutBio} onChange={handleContentChange} className="w-full mt-1 border border-gray-300 p-2 rounded" rows={4} />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Project Management */}
        <div className="bg-white p-6 rounded-lg shadow-md">
           <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-2xl font-semibold">프로젝트 관리</h2>
            <button onClick={handleAddNewProject} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                새 프로젝트 추가
            </button>
           </div>

           {editingProject ? (
             <div className="p-4 border rounded-md bg-gray-50 mb-6">
                <h3 className="text-xl font-medium mb-4">{editingProject.id.startsWith('proj') && editingProject.id.length > 5 ? '프로젝트 추가/수정' : `'${editingProject.title}' 수정`}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="title" value={editingProject.title} onChange={handleProjectChange} placeholder="제목" className="border p-2 rounded w-full" />
                    <input type="text" name="category" value={editingProject.category} onChange={handleProjectChange} placeholder="카테고리" className="border p-2 rounded w-full" />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input type="text" name="company" value={editingProject.company} onChange={handleProjectChange} placeholder="소속" className="border p-2 rounded w-full" />
                    <input type="text" name="period" value={editingProject.period} onChange={handleProjectChange} placeholder="기간" className="border p-2 rounded w-full" />
                    <input type="text" name="role" value={editingProject.role} onChange={handleProjectChange} placeholder="역할" className="border p-2 rounded w-full" />
                    <input type="text" name="tools" value={editingProject.tools} onChange={handleProjectChange} placeholder="툴" className="border p-2 rounded w-full" />
                </div>
                <textarea name="team" value={editingProject.team} onChange={handleProjectChange} placeholder="팀" className="border p-2 rounded w-full mt-4" rows={2}></textarea>
                <input type="text" name="platform" value={editingProject.platform || ''} onChange={handleProjectChange} placeholder="플랫폼" className="border p-2 rounded w-full mt-4" />
                <textarea name="description" value={editingProject.description} onChange={handleProjectChange} placeholder="설명" className="border p-2 rounded w-full mt-4" rows={5}></textarea>
                <input type="text" name="imageUrl" value={editingProject.imageUrl} onChange={handleProjectChange} placeholder="이미지 URL" className="border p-2 rounded w-full mt-4" />
                <div className="mt-4 flex gap-2">
                    <button onClick={handleSaveProject} className="bg-blue-500 text-white px-4 py-2 rounded">저장</button>
                    <button onClick={() => setEditingProject(null)} className="bg-gray-300 px-4 py-2 rounded">취소</button>
                </div>
             </div>
           ) : (
            <div className="space-y-4">
                {theme.projects.map(project => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50">
                        <div>
                            <p className="text-sm text-gray-500">{project.category}</p>
                            <p className="font-bold text-lg">{project.title}</p>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => setEditingProject(project)} className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">수정</button>
                            <button onClick={() => handleDeleteProject(project.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">삭제</button>
                        </div>
                    </div>
                ))}
            </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;