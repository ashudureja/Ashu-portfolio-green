import React from 'react'
import { motion } from 'framer-motion'

const Skills2 = () => {
  const skills = [
    { name: 'REACT', color: '#61dafb', darkColor: '#21a1c4' },
    { name: 'JAVASCRIPT', color: '#f7df1e', darkColor: '#b8a42c' },
    { name: 'TYPESCRIPT', color: '#3178c6', darkColor: '#235a87' },
    { name: 'TAILWINDCSS', color: '#06b6d4', darkColor: '#0891b2' },
    { name: 'HTML5', color: '#e34f26', darkColor: '#c4391a' }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {
      x: -100,
      rotateY: -25,
      scale: 0.9,
      opacity: 0,
      filter: 'blur(4px)'
    },
    visible: (index) => ({
      x: index * window.innerWidth * 0.18,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.8,
        delay: index * 0.08,
        duration: 1.2
      }
    })
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: 45,
      filter: 'blur(2px)'
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.6 + index * 0.08,
        duration: 0.8
      }
    })
  }

  return (
    <div className='h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100'>
      <div className="bg-white/90 absolute bottom-4 left-4 z-[999] backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl shadow-slate-200/50">
        <h3 className="text-slate-800 text-lg font-semibold mb-2">Skills Showcase</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Interactive cards showcasing technical expertise.<br/>
          Hover to explore each technology in detail.
        </p>
      </div>
      
      <motion.div
        className='h-full w-full flex absolute top-0 left-0'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className='absolute w-[18%] h-full flex justify-center items-center cursor-pointer'
            style={{ 
              background: `linear-gradient(135deg, ${skill.color} 0%, ${skill.darkColor} 100%)`,
              transformStyle: 'preserve-3d'
            }}
            variants={cardVariants}
            custom={index}
            whileHover={{
              scale: 1.08,
              rotateY: 5,
              z: 50,
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              transition: { 
                type: "spring",
                damping: 15,
                stiffness: 200,
                duration: 0.3
              }
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          >
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
            />
            
            <motion.h2
              className='-rotate-90 text-xl font-bold text-white select-none relative z-10'
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                letterSpacing: '0.1em'
              }}
              variants={textVariants}
              custom={index}
              whileHover={{
                scale: 1.1,
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                transition: { duration: 0.2 }
              }}
            >
              {skill.name}
            </motion.h2>
            
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 rounded-sm"
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1,
                boxShadow: `inset 0 0 60px rgba(255,255,255,0.2), 0 0 60px ${skill.color}40`
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  )
}

export default Skills2