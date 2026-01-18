'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    BookOpenIcon,
    ClipboardDocumentIcon,
    DocumentTextIcon
} from '@heroicons/react/24/outline';
import { Github, FileText, Globe, ExternalLink } from 'lucide-react';
import { Publication } from '@/types/publication';
import { cn } from '@/lib/utils';


interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({ publications, title = 'Selected Publications', enableOnePageMode = false }: SelectedPublicationsProps) {
    const [expandedBibtexId, setExpandedBibtexId] = useState<string | null>(null);
    const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif font-bold text-primary">{title}</h2>
                <Link
                    href={enableOnePageMode ? "/#publications" : "/publications"}
                    prefetch={true}
                    className="text-accent hover:text-accent-dark text-sm font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                >
                    View All →
                </Link>
            </div>
            <div className="space-y-4">
                {publications.map((pub, index) => (
                    <motion.div
                        key={pub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-[rgba(148,163,184,0.24)] hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {pub.preview && (
                                <div className="w-full md:w-48 flex-shrink-0">
                                    <div className="aspect-video md:aspect-[4/3] relative rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                        <Image
                                            src={`/papers/${pub.preview}`}
                                            alt={pub.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex-grow">
                                <h3 className="font-semibold text-primary mb-2 leading-tight">
                                    {pub.title}
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-1">
                                    {pub.authors.map((author, idx) => (
                                        <span key={idx}>
                                            <span className={`${author.isHighlighted ? 'font-semibold text-accent' : ''} ${author.isCoAuthor ? `underline underline-offset-4 ${author.isHighlighted ? 'decoration-accent' : 'decoration-neutral-400'}` : ''}`}>
                                                {author.name}
                                            </span>
                                            {author.isCorresponding && (
                                                <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-500'}`}>†</sup>
                                            )}
                                            {idx < pub.authors.length - 1 && ', '}
                                        </span>
                                    ))}
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-2">
                                    {pub.journal || pub.conference}
                                </p>
                                {pub.description && (
                                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 line-clamp-2">
                                        {pub.description}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {pub.projectUrl && (
                                        <a
                                            href={pub.projectUrl.startsWith('http') ? pub.projectUrl : `https://${pub.projectUrl}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white transition-colors"
                                        >
                                            <Globe className="h-3 w-3 mr-1.5" />
                                            Project
                                        </a>
                                    )}
                                    {pub.paper && (
                                        <a
                                            href={pub.paper.startsWith('http') ? pub.paper : `https://${pub.paper}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white transition-colors"
                                        >
                                            <FileText className="h-3 w-3 mr-1.5" />
                                            Paper
                                        </a>
                                    )}
                                    {pub.code && (
                                        <a
                                            href={pub.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white transition-colors"
                                        >
                                            <Github className="h-3 w-3 mr-1.5" />
                                            Code
                                        </a>
                                    )}
                                    {(pub.arxivId || pub.arxivUrl) && (
                                        <a
                                            href={pub.arxivUrl || `https://arxiv.org/abs/${pub.arxivId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white transition-colors"
                                        >
                                            <ExternalLink className="h-3 w-3 mr-1.5" />
                                            arXiv
                                        </a>
                                    )}
                                    {pub.abstract && (
                                        <button
                                            onClick={() => setExpandedAbstractId(expandedAbstractId === pub.id ? null : pub.id)}
                                            className={cn(
                                                "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium transition-colors border",
                                                expandedAbstractId === pub.id
                                                    ? "bg-accent text-white border-accent"
                                                    : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white"
                                            )}
                                        >
                                            <DocumentTextIcon className="h-3 w-3 mr-1.5" />
                                            Abstract
                                        </button>
                                    )}
                                    {pub.bibtex && (
                                        <button
                                            onClick={() => setExpandedBibtexId(expandedBibtexId === pub.id ? null : pub.id)}
                                            className={cn(
                                                "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium transition-colors border",
                                                expandedBibtexId === pub.id
                                                    ? "bg-accent text-white border-accent"
                                                    : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white"
                                            )}
                                        >
                                            <BookOpenIcon className="h-3 w-3 mr-1.5" />
                                            BibTeX
                                        </button>
                                    )}
                                </div>

                                <AnimatePresence>
                                    {expandedAbstractId === pub.id && pub.abstract ? (
                                        <motion.div
                                            key="abstract"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden mt-4"
                                        >
                                            <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                    {pub.abstract}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ) : null}
                                    {expandedBibtexId === pub.id && pub.bibtex ? (
                                        <motion.div
                                            key="bibtex"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden mt-4"
                                        >
                                            <div className="relative bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                                                <pre className="text-xs text-neutral-600 dark:text-neutral-400 overflow-x-auto whitespace-pre-wrap font-mono">
                                                    {pub.bibtex}
                                                </pre>
                                                <button
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(pub.bibtex || '');
                                                    }}
                                                    className="absolute top-2 right-2 p-1.5 rounded-md bg-white dark:bg-neutral-800 text-neutral-500 hover:text-accent shadow-sm border border-neutral-200 dark:border-neutral-700 transition-colors"
                                                    title="Copy to clipboard"
                                                >
                                                    <ClipboardDocumentIcon className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}


